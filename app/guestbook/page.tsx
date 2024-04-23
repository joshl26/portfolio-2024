import { auth } from "@/app/auth";
import { getGuestbookEntries } from "@/app/db/queries";
import { SignIn, SignOut } from "./buttons";
import { Suspense } from "react";
import Form from "./form";

export const metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and leave your signature.",
};

export default function GuestbookPage() {
  return (
    <section className="w-screen min-h-[80vh]">
      <div className="m-auto md:w-[500px] p-6">
        <h1 className="text-[2.5rem] mb-8 tracking-tighter">
          Sign my interactive guestbook
        </h1>
        <Suspense>
          <GuestbookForm />
          <GuestbookEntries />
        </Suspense>
      </div>
    </section>
  );
}

async function GuestbookForm() {
  let session = await auth();

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  );
}

async function GuestbookEntries() {
  let entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry: any) => (
    <div key={entry.id} className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          {entry.created_by}:
        </span>
        {entry.body}
      </div>
    </div>
  ));
}
