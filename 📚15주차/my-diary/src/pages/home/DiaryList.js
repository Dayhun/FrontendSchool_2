import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFireStore';

export default function DiaryList({ diaries }) {
    const { deleteDocument } = useFirestore('diary');

    return (
        <>
            {
                //map: 원래 배열을 냅두고, 새로운 배열로 반환
                diaries.map((item) => {
                    return (
                        <li key={item.id}>
                            <strong className={styles.title}>{item.title}</strong>
                            <p className={styles.text}>{item.text}</p>
                            <button onClick={() => deleteDocument(item.id)}>x</button>
                        </li>
                    )
                })
            }
        </>
    )
}

// export default function DiaryList({ diaries }) {
//     items = diaries.map((item) => {
//         return (
//             <li key={item.id}>
//                 <strong className={styles.title}>{item.title}</strong>
//                 <p className={styles.text}>{item.text}</p>
//             </li>
//         )
//     })
//     return (
//         { items }
//     )
// }