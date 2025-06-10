import DisplayErrorMsg from "@/components/error-msg";

export default function NotFoundPage() {
  
  return (
    <DisplayErrorMsg
      contentTitle='404'
      content='Página não encontrada.' />
  );
}
