import ContactRequestForm from "@/app/componets/contact-request-form";

const Page = () => {
  return (
    <main className="w-full min-h-screen">

      <header className="w-full p-10">
        <h2 className="text-3xl font-bold mb-2">Making a request?</h2>
        <p className="text-gray-500">
          Be sure to input an additional information needed to know about your certain request so we can have a better understanding.
        </p>
      </header>

      <ContactRequestForm />
      
    </main>
  );
};

export default Page;
