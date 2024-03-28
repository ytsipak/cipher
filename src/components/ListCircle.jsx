const ListCircle = ({dimensions, upperDivStyles, innerDivStyles, inset}) => {
  return (
    <div
      className={`relative ${dimensions || 'w-14 h-14'} ${upperDivStyles} rounded-full bg-primaryLime`}
    >
      <div
        className={`absolute ${inset || 'inset-1'} ${innerDivStyles} rounded-full border-2 border-primaryDark`}
      />
    </div>
  );
};

export default ListCircle;
