import { useState } from 'react';
import { useFirestore } from '../../hooks/useFireStore';
import { useEffect } from 'react';

export default function DiaryForm({ uid }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { addDocument, response } = useFirestore('diary');

    // 데이터를 firestore로 전송
    const submitData = (event) => {
        event.preventDefault();
        console.log(title, text);
        addDocument({
            uid,
            title,
            text
        });
    }

    // 일기가 추가되면 입력란 input 빈화면 만들어주기(초기화)
    useEffect(() => {
        if (response.success) {
            setTitle('');
            setText('');
        }
    }, [response.success])

    return (
        <form onSubmit={submitData}>
            <fieldset>
                <legend>일기 쓰기</legend>
                <label htmlFor="tit">일기 제목 : </label>
                <input id="tit" type="text" required value={title} onChange={(event) => { setTitle(event.target.value) }} />
                <label htmlFor="txt">일기 내용 : </label>
                <textarea id="txt" required value={text} onChange={(event) => { setText(event.target.value) }}></textarea>
                <button type="submit">저장하기</button>
            </fieldset>
        </form>
    )
}