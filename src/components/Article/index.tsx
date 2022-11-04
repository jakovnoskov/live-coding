import React from 'react';
import { CopyBlock } from 'react-code-blocks';
import styles from './Article.module.scss';
import { dracula } from "react-code-blocks";

export const Article: React.FC = () => {

  //@ts-ignore
  const code = `function reverse(num) {
    let rev = 0;
    let last;
    
        while(num != 0){
            last = num % 10; // тест
            rev = rev * 10 + last;
            num = Math.floor(num/10);
        }

      return rev;
    }`;
  const language = `javascript`;

  return (

    <div className={styles.articleWrapper}>
      <div className={styles.articleBlock}>
        <h2 className={styles.articleTextTitle}>Почему мы выбрали лайвкодинг</h2>
        <p className={styles.articleText}>
          лайвкодинг, как и любая другая дисциплина, имеет свои особенности.
          Он подразумевает непосредственное наблюдение за работой человека, а также его общение.
          Это не просто сбор данных.
          В большинстве случаев нужно не только собирать сведения, но и анализировать их, делать выводы, принимать решения, оценивать и корректировать действия других людей.
          Такой подход позволяет добиться высокого уровня эффективности в работе любой компании.
          Но чтобы достичь успеха, нужно понимать, что такое лайвкодинг.
        </p>

        <CopyBlock
          text={code}
          language={language}
          showLineNumbers={true}
          theme={dracula}
        />
      </div>
    </div>

  )
}