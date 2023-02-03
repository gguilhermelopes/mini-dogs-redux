import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import styles from "./PhotosLoadMore.module.css";
import Loading from "./Helpers/Loading";

const PhotosLoadMore = () => {
  const dispatch = useDispatch();
  const { pages, infinite, loading } = useSelector((state) => state.photos);

  function handleClick() {
    dispatch(loadNewPhotos(pages + 1));
  }

  if (!infinite)
    return (
      <p className={styles.endPhotos}>
        Não existem mais fotos há ser carregadas.
      </p>
    );

  if (loading) return <Loading />;
  return (
    <button onClick={handleClick} className={styles.button}>
      +
    </button>
  );
};

export default PhotosLoadMore;
