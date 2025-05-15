import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useCloudinaryWidgetScript from "../../hooks/useCloudinaryWidgetScript";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Cloudinary } from "@cloudinary/url-gen";
import { Send } from "../icons/SvgIcons";
import { protectRoute } from "../../utils/protectRoutes";
import { toastConfig } from "../../configs/notificationConfig";
import { toastMessage } from "../../utils/toastMassege";
function MassegeSenderForm({ type, data = null }) {
  const widgetReady = useCloudinaryWidgetScript();
  const [editorInstance, setEditorInstance] = useState(null);
  const [userData, setUserData] = useState(data);
  const [msgType, setMsgType] = useState("general");
  const [title,setTitle] = useState('')
  const [senderMassageData, setSenderMassageData] = useState("");

  // function uploadAdapter(loader) {
  //   console.log(loader);

  //   return {
  //     upload: () => {
  //       return new Promise((resolve, reject) => {
  //         var formData = new FormData();
  //         formData.append("name", "Ali Hamza");
  //         loader.file.then((file) => {
  //           formData.append("files", file);
  //           setImgData((prev) => [...prev, file]);
  //           console.log(file);
  //         });
  //       });
  //     },
  //   };
  // }
  // function uploadPlugin(editor) {
  //   initializeUploadWidget()
  //   // editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
  //   //   return uploadAdapter(loader);
  //   //};
  // }
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          if (window.cloudinary) {
            const widget = window.cloudinary.createUploadWidget(
              {
                cloudName: "doda4kgzp",
                uploadPreset: "test@345",
              },
              (error, result) => {
                if (!error && result && result.event === "success") {
                  console.log("Upload success:", result.info);

                  // Example result structure: result.info.secure_url
                  resolve({
                    default: result.info.secure_url, // This will insert image into CKEditor
                  });

                  // OPTIONAL: Disable editor after upload
                  // setTimeout(() => {
                  //   const editable = document.querySelector(".ck-editor__editable");
                  //   if (editable) {
                  //     editable.setAttribute("contenteditable", "false");
                  //   }
                  // }, 100);
                } else if (error) {
                  reject(error);
                }
              }
            );

            widget.open(); // Trigger widget UI
          } else {
            reject("Cloudinary not available");
          }
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName:"doda4kgzp",
  //   },
  // });

  // // Upload Widget Configuration
  // const uwConfig = {
  //   cloudName:"doda4kgzp",
  //   uploadPreset:"test@345",
  //   // Uncomment and modify as needed:
  //   // cropping: true,
  //   // showAdvancedOptions: true,
  //   // sources: ['local', 'url'],
  //   // multiple: false,
  //   // folder: 'user_images',
  //   // tags: ['users', 'profile'],
  //   // context: { alt: 'user_uploaded' },
  //   // clientAllowedFormats: ['images'],
  //   // maxImageFileSize: 2000000,
  //   // maxImageWidth: 2000,
  //   // theme: 'purple',
  // };

  //  const initializeUploadWidget = () => {
  //   if (window.cloudinary ) {
  //     // Create upload widget
  //     uploadWidgetRef.current = window.cloudinary.createUploadWidget(
  //       uwConfig,
  //       (error, result) => {
  //         if (!error && result && result.event === 'success') {
  //           console.log('Upload successful:', result.info);
  //          // setPublicId(result.info.public_id);
  //         }
  //       }
  //     );

  //     // Add click event to open widget

  //       if (uploadWidgetRef.current) {
  //         uploadWidgetRef.current.open();
  //       }

  //     // Cleanup
  //     ;
  //   }
  // };
  useEffect(() => {
    if (!editorInstance) return;

    // Give CKEditor a few ticks to render the toolbar.
    const timer = setTimeout(() => {
      const toolbarEl = editorInstance.ui.view.toolbar.element;
      // Find the <button> whose aria-label is “Insert image”
      const btn = toolbarEl.querySelector(
        'button[data-cke-tooltip-text="Insert image"]'
      );
      if (!btn) {
        console.warn("Couldn’t find the Insert image button");
        return;
      }

      // Hide the <input type="file"> that CKEditor put inside that button
      const fileInput = btn.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.style.display = "none";
        // Stop it from accidentally firing
        fileInput.disabled = true;
      }

      // Unbind any existing click listeners (just in case)
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      // Attach our own click handler
      newBtn.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();

        if (!window.cloudinary) {
          console.error("Cloudinary widget not loaded");
          return;
        }

        const widget = window.cloudinary.createUploadWidget(
          { cloudName: "doda4kgzp", uploadPreset: "test@345" },
          (err, result) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(result);

            if (result.event === "success") {
              editorInstance.model.change((writer) => {
                const img = writer.createElement("imageBlock", {
                  src: result.info.secure_url,
                });
                editorInstance.model.insertContent(
                  img,
                  editorInstance.model.document.selection
                );
              });
            }
          }
        );
        widget.open();
      });
    }, 100); // 100ms delay

    return () => clearTimeout(timer);
  }, [editorInstance]);
  useEffect(() => {
    if (type === "reply") {
      setMsgType("user");
    }
  }, [type]);
  const sendMsg = async () => {
    console.log('hi');
    
    try {
      await toast.promise(
        protectRoute().handle("post", `/api/users/msg/send`, {
          audience: "ALL_USERS",
          content:senderMassageData,
          title:title
        }),toastMessage(),
        toastConfig
      );
    } catch (error) {}
  };
  return (
    <>
      {type !== "reply" && (
        <div className="switcher flex">
          <div
            className={`${msgType === "general" ? "switcher_active" : ""}`}
            onClick={() => setMsgType("general")}
          >
            General
          </div>
          <div
            onClick={() => setMsgType("user")}
            className={`${msgType === "user" ? "switcher_active" : ""}`}
          >
            to user
          </div>
        </div>
      )}
      <div
        className="flex "
        style={{
          width: "100%",
          gap: "10px",
        }}
      >
        {type !== "reply" && msgType === "user" && (
          <div
            className="form--box form__title "
            style={{ marginBottom: "10px", flex: 1 }}
          >
            <input type="text" placeholder="put user email" />
          </div>
        )}
        <div
          className="form--box form__title "
          style={{ marginBottom: "10px", flex: 1 }}
        >
          <input type="text" placeholder="put your title" onChange={(e)=>{
            setTitle(e.target.value)
          }}  />
        </div>
      </div>

      {widgetReady && (
        <div
          className={`${type === "new" ? "new" : ""}`}
          style={{
            height: type === "new" ? "calc(100% - 160px)" : "auto",
          }}
        >
          <CKEditor
            editor={ClassicEditor}
            config={{
              extraPlugins: [uploadPlugin],
            }}
            data={"<p>write your message here</p>"}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed
              setEditorInstance(editor);
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              console.log(data);
              setSenderMassageData(data);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      )}
      {/* {senderMassageData} */}
      <button className="send-massage-btn" onClick={sendMsg}>
        {" "}
        <Send color={"#0db8d3"}  />{" "}
      </button>
    </>
  );
}

export default MassegeSenderForm;
