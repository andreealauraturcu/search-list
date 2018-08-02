import catList from "./catList.json";

export default function filterCat(searchText, maxResults) {
  return catList
    .filter(cat => {
      if (cat.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (cat.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
