import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";

type IProps = {
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  images: File[];
  setImageResponse: React.Dispatch<
    React.SetStateAction<
      {
        url: string;
      }[]
    >
  >;
};

function ImageUpload({ setImageResponse, setImages, images }: IProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const MAX_FILE_SIZE = 1024 * 1024;

  const uploadData = (data: any): Promise<any> =>
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/upload`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: any) => {
          const progressPercent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(progressPercent);
        },
      })
      .then((res) => res.data);
  const { mutate } = useMutation(uploadData, {
    onSuccess(data: any) {
      setImageResponse((prev) => [...prev, { url: data?.url }]);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      // setImages(file);
      if (!file) return;
      if (!file.name.match(/\.(jpg|jpeg|png)$/)) {
        setError("select valid image.");
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        setError("Image file size too large. Maximum size is 1 mb.");
        return false;
      }
      if (images.some((image) => image.name === file.name)) {
        setError("Image already selected.");
        return false;
      }
      setError("");
      setImages([...images, file]);
      const data = new FormData();
      data.append("image", e.target.files[0]);
      setProgress(0);
      mutate(data);
    }
  };
  return (
    <div className="my-4">
      <h2 className="font-bold">images</h2>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleInputChange}
        className="hidden"
      />
      <div className="flex flex-wrap gap-4">
        {images.map((image, idx) => (
          <div className="relative w-32 max-h-20" key={idx}>
            <div className="relative ">
              <img
                src={URL.createObjectURL(image)}
                alt="Selected Image"
                className="w-full h-full"
              />
              <div className="bg-black absolute inset-0 opacity-30"></div>
            </div>
            <div className="w-3/4 bg-gray-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <div
                className="bg-primary text-xs font-medium text-blue-100 text-center p-[0.2px] leading-none rounded-sm transition-all duration-500  "
                style={{
                  width: `${images.length === idx + 1 ? progress : 100}%`,
                }}
              >
                {images.length === idx + 1 ? progress : 100}%
              </div>
            </div>
          </div>
        ))}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="bg-gray-100 cursor-pointer w-32 h-20 flex items-center justify-center text-3xl text-primary"
        >
          <BiImageAdd />
        </div>
      </div>
      <p className="text-primary">{error && error}</p>
    </div>
  );
}

export default ImageUpload;
