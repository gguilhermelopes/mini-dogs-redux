import React from "react";
import { useSelector } from "react-redux";
import styles from "./PhotosContent.module.css";

const PhotosContent = () => {
  const { list } = useSelector((state) => state.photos);
  return (
    <ul className={styles.list}>
      {list.map((photo) => (
        <li key={photo.id} className="anime">
          <img src={photo.src} alt={`Foto de título ${photo.title}`} />
          <h2>{photo.title}</h2>
          <span>{photo.acessos}</span>
        </li>
      ))}
    </ul>
  );
};

export default PhotosContent;
