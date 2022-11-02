const GalleryImage: React.FC<{ adress: string; name: string; key: string }> = (
  props
) => {
  return (
    <img
      src={props.adress}
      alt={props.name}
      className="w-full h-full object-none object-center  animate-zoom"
      key={props.key}
    />
  );
};

export default GalleryImage;
