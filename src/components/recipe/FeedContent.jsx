import { useEffect, useState } from 'react';
import { useTab } from '../../context/useTab';
import Feed from './Feed';
import { fetchCategories } from '../../hooks/fetch';

export default function TabContent() {
  const [categories, setCategories] = useState([]);
  const { activeTab } = useTab();

  useEffect(() => {
    const getData = async () => {
      const fetchedCategories = await fetchCategories();
      const news = fetchedCategories.slice(0, 6);
      setCategories(news);
    };
    getData();
  }, []);

  return (
    <div className="w-2/4 ml-[25%] h-screen">
      {/* Loop through categories and render Feed if activeTab matches category name */}
      {categories.map(
        (category) =>
          activeTab === category.strCategory && (
            <Feed key={category.idCategory} mealTime={category.strCategory} />
          )
      )}
    </div>
  );
}
