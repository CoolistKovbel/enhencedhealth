import ContactUpdateForm from "@/app/componets/contact-update-form";
import ProfileAddress from "@/app/componets/settings/profile-address";
import { getSession } from "@/app/lib/action";

const page = async () => {

  const user = await getSession()

  console.log(user)


  return (
    <main className="w-full min-h-screen">
      <header className="p-3 bg-[#444]">
        <h2 className="font-bold  text-2xl">Update Profile</h2>
        <p className="text-sm">
          IF youre account doesnt update automaitcally please refresh or
          relogin. Please contact me if you recieve this issue
        </p>
      </header>

      <ContactUpdateForm />

      <ProfileAddress />
    </main>
  );
};

export default page;
