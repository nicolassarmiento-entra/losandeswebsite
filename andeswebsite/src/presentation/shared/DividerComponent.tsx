import { statics } from "../../assets/media";

const DividerComponent = ({ text }: { text: string }) => {
  return (
    <div className="flex align-middle items-start gap-x-2 md:gap-x-4">
      <img
        src={statics.divider}
        alt="dividerconstructoradelosandes"
        className="-ml-30 self-center"
      />
      <span className="text-andes-main font-bold text-xl">{text}</span>
    </div>
  );
};

export default DividerComponent;
