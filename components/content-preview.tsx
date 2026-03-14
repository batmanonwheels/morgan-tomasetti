export const ContentPreview = ({ link }: { link: string | undefined }) => {
  return (
    <div className="hidden peer-hover:block peer-hover:flex-1 ">
      <video
        src={"https://youtube.com/shorts/WUVgt3dEfH4?si=7P1Xhr7jYeMUXv07"}
        controls
        className="h-10 w-full"
      ></video>
    </div>
  );
};
