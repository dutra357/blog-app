type DisplayErrorMsgProps = {
    contentTitle: string,
    content: React.ReactNode
}

export default function DisplayErrorMsg({ contentTitle, content }: DisplayErrorMsgProps) {
  return (
    <>
      <div 
      className="min-h-[320px] bg-slate-900 text-slate-100
       mb-16 p-8 rounded-xl flex items-center justify-center">
        
        <div>
          <h1 className="text-7xl/tight mb-4 font-bold">{contentTitle}</h1>
          <div className="text-xl">{content}</div>
        </div>
      
      </div>
    </>
  );
}
