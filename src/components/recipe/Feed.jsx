import Post from './Post';
import dummyImageOne from '../../assets/images/images (1).jpeg';
import dummyImageTwo from '../../assets/images/images.jpeg';

const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const colors = ['bg-pink', 'bg-white', 'bg-blue', 'bg-white'];

const Feed = () => {
  return (
    <div className="fixed top-20 w-2/4">
      <h2 className="fixed text-2xl font-semibold">Feeds</h2>

      <div className="pt-10">
        <div className="overflow-y-auto max-h-screen">
          {posts.map((post, index) => {
            // Determine the background color by cycling through the colors array
            const backgroundColor = colors[index % colors.length];

            return (
              <Post
                key={post}
                username="George Lobko"
                time="2 hours ago"
                content="Hi everyone, today I was on the most beautiful mountain in the world 😍."
                backround={backgroundColor}
                images={[dummyImageOne, dummyImageTwo]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
