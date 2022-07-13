import { useState } from 'react'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList';
import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

export default function Home() {
    const { user } = useAuthContext();
    // 로그인 된 사용자랑 일기쓴 사용자랑 같을 때만 일기 가져오기
    const { documents, error } = useCollection('diary', ['uid', '==', user.uid]);

    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm uid={user.uid} />
            </aside>
            <ul className={styles.content_list}>
                {error && <strong>{error}</strong>}
                {documents && <DiaryList diaries={documents} />}
            </ul>
        </main>
    )
}
