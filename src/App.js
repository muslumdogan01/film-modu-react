import "./app.css";
import React, { useState } from "react";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true },
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");

  const addNew = (title) => {
    setListe([
      ...liste,
      { id: Date.now(), baslik: yeniBaslik, completed: false },
    ]);
    setYeniBaslik("");
  };

  const markCompleted = (itemId) => {
    setListe(
      liste.map((el) =>
        //üzerine tıkladığımız divin id sine eşitse / ..el objesini tekrar döndürüp,
        // tamamlandı değerine(yani true,false) !el.tamamlandının tersini verdik
        el.id === itemId ? { ...el, tamamlandi: !el.tamamlandi } : el
      )
    );
  };

  const clearCompleted = () => {
    setListe(liste.filter((item) => !item.tamamlandi));
  };

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          value={yeniBaslik}
          onChange={(e) => setYeniBaslik(e.target.value)}
          placeholer="listeye ekle"
        />
        <button onClick={() => addNew(yeniBaslik)}>Ekle</button>
      </div>
      <div className="liste">
        {liste.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              markCompleted(item.id);
            }}
            className={item.tamamlandi ? "yapildi" : "yapilmadi"}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => clearCompleted()} className="temizle">
        Tamamlananları Temizle
      </button>
    </div>
  );
}



// const başlangıçDurumu = {
//   yapılacaklar: [
//     { id: 0, name: "Duş al", saat: "10:00" },
//     { id: 1, name: "Spor yap", saat: "15:00" },
//   ],
//   yapılanlar: [{ id: 3, name: "Kahvaltı", saat: "12:00" }],
// };

// console.log(başlangıçDurumu.yapılacaklar[0]);

/* Ternary operator: 
   Durum true dönerse, true alanına yazan kod bloğu çalışır, false dönerse false alanına yazılan kod bloğu çalışır
   SYNTAX :  (durum) ? true : false
*/
/* 
   Logical && Operator: 
   Durum true ise, kod bloğu çalışır
   SYNTAX: (durum) && true */

// export default function App() {
//   const [forValue, setForValue] = useState("");
//   const [forDate, setForDate] = useState("");
//   const [liste, setListe] = useState(başlangıçDurumu);

//   /* Burada kullanılan object spread metodu */
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const submitObject = { id: Math.random(), name: forValue, saat: forDate };
//     setListe((eskiListe) => {
//       return {
//         ...eskiListe,
//         yapılacaklar: [...eskiListe.yapılacaklar, submitObject],
//       };
//     });
//   };

//   /* Burada kullanınan JavaScriptten gelen filter fonksiyonu */
//   const deleteTodoItem = (itemId) => {
//     setListe((eskiListe) => {
//       return {
//         ...eskiListe,
//         yapılacaklar: eskiListe.yapılacaklar.filter(
//           (item) => item.id !== itemId
//         ),
//       };
//     });
//   };

//   const moveToItem = (itemId) => {
//     const movedItem = liste.yapılacaklar.filter((i) => i.id != itemId);
//     console.log(movedItem[0]);
//     setListe((eskiListe) => {
//       return {
//         ...eskiListe,
//         yapılanlar: [...eskiListe.yapılanlar, movedItem[0]],
//       };
//     });

//     setListe((eskiListe) => {
//       return {
//         ...eskiListe,
//         yapılacaklar: eskiListe.yapılacaklar.filter((i) => i.id != itemId),
//       };
//     });
//   };

//   return (
//     <div className="App">
//       <form
//         onSubmit={(e) => {
//           onSubmit(e);
//         }}
//       >
//         <input
//           value={forValue}
//           onChange={(e) => {
//             setForValue(e.target.value);
//           }}
//           placeholder="Yapılacak"
//           type="text"
//         />
//         <input
//           value={forDate}
//           onChange={(e) => {
//             setForDate(e.target.value);
//           }}
//           placeholder="Tarih"
//           type="text"
//         />
//         <input type="submit" value="Submit" />
//       </form>
//       <h1> Yapılacaklar listesi</h1>
//       <div>
//         {liste?.yapılacaklar.length !== 0 ? (
//           liste?.yapılacaklar?.map((item, index) => (
//             <div key={index + item.name}>
//               <p>{item.name}</p>
//               <button onClick={() => deleteTodoItem(item.id)}>Sil</button>
//               <button onClick={() => moveToItem(item.id)}>Done</button>
//             </div>
//           ))
//         ) : (
//           <p> Yapılacak hiçbir şey bırakmadın amına koyim </p>
//         )}
//       </div>
//       <h1>Yapılanlar</h1>
//       <div>
//         {liste?.yapılanlar?.map((item, index) => (
//           <p key={index + item?.name}>{item?.name}</p>
//         ))}
//         <p> Yapılan görev sayısı {liste.yapılanlar.length}</p>
//         {liste.yapılacaklar.length === 0 ? (
//           <p>Yapılacak bir şey kalmadı mk</p>
//         ) : (
//           <p>Şunları bitir artık mk {liste.yapılacaklar.length} </p>
//         )}
//       </div>
//     </div>
//   );
// }
