import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";
// in this layout we have a header for image and web page common in search folder

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
      {/* footer */}
    </div>
  );
}
