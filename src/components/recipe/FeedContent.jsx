import { useTab } from '../../context/useTab';
import Feed from './Feed';
import Breakfast from './Breakfast';

export default function TabContent() {
  const { activeTab } = useTab();
  return (
    <div className="w-2/4 ml-[25%] h-screen">
      {activeTab === 'new-recipes' && <Feed />}
      {activeTab === 'breakfast' && <Breakfast />}
      {activeTab === 'recipe'}
    </div>
  );
}
