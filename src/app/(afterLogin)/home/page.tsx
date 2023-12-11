import style from './Home.module.css';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        {/* <PostForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
      </TabProvider>
    </main>
  );
}
