import "./../globals.css";
import SearchHeader from "@/components/SearchHeader";
// children is page.jsx

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
      {/* footer */}
    </div>
  );
}
