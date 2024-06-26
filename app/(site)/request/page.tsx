import ContactRequestForm from "@/app/componets/contact-request-form";

const Page = () => {
  return (
    <main className="w-full min-h-screen">
      <header className="w-full p-5">
        <h2 className="text-3xl font-bold">Making a request?</h2>
        <p className="text-gray-500">
          Be sure to remeber to provide us with a wireframe or make sure you
          have one ready
        </p>
      </header>

      <ContactRequestForm />
    </main>
  );
};

export default Page;
