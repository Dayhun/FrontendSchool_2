// 컬랙션에 접근
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { appFireStore } from '../firebase/config';

export const useCollection = (transaction, myQuery) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    // 컬랙션에 변화가 있을때마다 반응주기
    useEffect(() => {
        let q;
        if (myQuery) {
            q = query(collection(appFireStore, transaction), where(...myQuery), orderBy("createdTime", 'desc'))
        }
        // onSnapshot함수는 가장 최신의 컬랙션의 모습을 반환하는 함수
        const unsubscribe = onSnapshot(myQuery ? q : collection(appFireStore, transaction),
            // snapshot :  가장 최신의 컬랙션이 snapshot에 저장됨.
            (snapshot) => {
                let result = [];
                // .docs : 컬랙션안의 문서에 접근하여, 문서의 정보를 배열로 저장한다.
                snapshot.docs.forEach((doc) => {
                    // .data : 문서doc의 데이터를 반환
                    result.push({ ...doc.data(), id: doc.id });
                })

                setDocuments(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
            });
        //cleanup
        return unsubscribe;
    }, [collection])
    return { documents, error }
}
