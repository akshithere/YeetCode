import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useEffect, useState } from 'react';

export default function CodeEditor(){
    const [code, setCode] = useState<string>('');
    const [language, setLanguage] = useState('');

    useEffect(()=>{
        console.log(code);
    },[]);

    return (
        <>
        <Editor
        height="90vh"
         defaultLanguage='cpp'
          defaultValue=''
          theme='vs-dark'
          value={code}
          onChange={(value, event)=>{
            setCode(value || '');
            console.log(code);
          }}
          />
        </>
    )
}