export const metadata = {
  title: "Home - Community",
  description: "Page description",
};
import Hero from "@/components/hero";
import PostsList from "./posts-list";
import Boxes from "@/components/boxes";
import Sidebar from "@/components/sidebar";
import { CreatePost } from "@/components/post/createPost";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Page content */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex md:justify-between md:divide-x md:divide-slate-800">
            {/* Main content */}
            <div className="md:grow pt-6 pb-12 md:pb-20">
              <div className="md:pr-6 lg:pr-10">
                <PostsList />
                <Boxes />
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
