import React, { useState } from 'react';

import firebase from '../firebase.js';
import shortid from 'shortid';
import debug from "debug";

import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const storage = firebase.storage().ref();
const firestore = firebase.firestore();

const log = debug("app:image");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const ImageUpload = ({
    onRequestSave,
    onRequestClear,
    defaultFiles = [],
}) => {
    const [files, setFiles] = useState(defaultFiles);
    const ref = React.useRef(null);

    return (
        <FilePond
            files={files}
            ref={ref}
            labelId={`<span class="filepond--label-action"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path id="a" d="M24 24H0V0h24v24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"/></svg><span>Add an image</span></span>`}
            allowMultiple={false}
            maxFiles={1}
            server={{
                process: (
                    _fieldName,
                    file,
                    _metadata,
                    load,
                    error,
                    progress,
                    _abort
                ) => {
                    // This id becomes the name of the file in storage
                    // The id is also stored in the "image" state in the InventoryForm.js component.
                    const id = shortid.generate();

                    const photoRef = storage.child("inventory-photos/" + id);

                    // The put method is going to upload the file and contentType to firebase storage. 
                    const task = photoRef.put(file, {
                            contentType: "image/jpeg"
                        });

                    task.on(
                        firebase.storage.TaskEvent.STATE_CHANGED,
                        snap => {
                            log("progress: %0", snap);
                            progress(true, snap.bytesTransferred, snap.totalBytes);
                        },
                        err => {
                            log("error: %0", err);
                            error(err.message);
                        },
                        () => {
                            log("DONE");
                            load(id);
                            // This saves id in the image state in the InventoryForm.js component
                            onRequestSave(id);
                            // Add the download url to a firestore doc with the same id (name) as the photo saved in storage
                            photoRef
                                .getDownloadURL()
                                .then(url => {
                                    firestore
                                        .collection("inventory-items")
                                        .doc(id)
                                        .set({
                                            imgURL: url
                                        });
                                });
                        }
                    );
                },
                load: (source, load, error, progress, abort) => {
                    progress(true, 0, 1024);
                    storage
                        .child("inventory-photos/" + source)
                        .getDownloadURL()
                        .then(url => {
                            let xhr = new XMLHttpRequest();
                            xhr.responseType = "blob";
                            xhr.onload = function(event) {
                                let blob = xhr.response;
                                log("loaded URL: %s", url);
                                load(blob);
                            };
                            xhr.open("GET", url);
                            xhr.send();
                        })
                        .catch(err => {
                            error(err.message);
                            abort();
                        });
                }
            }}
            onupdatefiles={fileItems => {
                if (fileItems.length === 0) {
                    onRequestClear();
                }
                setFiles(fileItems.map(fileItem => fileItem.file));
            }}
        />

    );


}

export default ImageUpload;