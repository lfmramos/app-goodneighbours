type CardProps = {
    title: string;
    content?: string;
    bgColor: string;
  };
  
    export default function Card({ title, content, bgColor }: CardProps) {
    return (
      <article
        className={`${bgColor} text-white p-8 rounded-lg shadow-md text-center hover:-mt-1 h-40 flex justify-center items-center`}
      >
        <h2 className="text-2xl font-bold mb-2 ">{title}</h2>
        {/* <p>{content}</p> */}
      </article>
    );
  };
  