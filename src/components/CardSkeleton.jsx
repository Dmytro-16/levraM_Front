const CardSkeleton = () => {
  return (
    <div className="Card Skeleton_Card">
      <div className="Skeleton_Img" />
      <div className="Skeleton_Line Skeleton_Line--title" />
      <div className="Skeleton_Line" />
      <div className="Skeleton_Line Skeleton_Line--short" />
      <div className="Skeleton_Btn" />
    </div>
  );
};

export default CardSkeleton;
