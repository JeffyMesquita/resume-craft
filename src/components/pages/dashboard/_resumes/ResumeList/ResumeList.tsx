import { AddResumeButton } from "../AddResumeButton";
import { ResumeCard } from "../ResumeCard";

export function ResumeList() {
  return (
    <section className="mid-lg:grid-cols-2 grid flex-1 auto-rows-max grid-cols-1 gap-4 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-4">
      <AddResumeButton />
      <ResumeCard />
      <ResumeCard />
    </section>
  );
}
