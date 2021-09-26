import React, { useEffect, useState } from 'react'
import Post from './Post';

function App() {
  const [postsList, setPostsList] = useState([])
  useEffect(() => {
    // get data from server (sample data)
    const TEXT = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.";
    const DATA_FROM_SERVER = [
      { "id": "1", "likeNumber": "۱۰", "commentNumber": "۲۱", "date": "۲ روز پیش", "descrition": TEXT },
      { "id": "2", "likeNumber": "۶", "commentNumber": "۱۴", "date": "۱ روز پیش", "descrition": TEXT },
      { "id": "3", "likeNumber": "۱۶", "commentNumber": "۲", "date": "۴ روز پیش", "descrition": TEXT },
      { "id": "4", "likeNumber": "۲", "commentNumber": "۸", "date": "۷ روز پیش", "descrition": TEXT }
    ]

    setPostsList(DATA_FROM_SERVER)
  }, [])

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-8">
      <h1 className="text-4xl mb-4 mx-6 text-right text-white">پست های وبلاگ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch xl:grid-cols-4 grid-flow-row items-center px-2 ">
        {postsList.length > 0 &&
          postsList.map((postItem, index) => {
            return (
              <Post key={index} post={postItem} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
