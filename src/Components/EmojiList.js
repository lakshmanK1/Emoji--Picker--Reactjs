import React,{memo, useEffect, useState} from 'react';

import { SearchBar, MainDiv, EmojiDiv, OutterEmojiDiv } from './StyledComponents';

const EmojiData = [
    {id:1,  title:'Smile', emoji:' 😁 '}, {id:2,title:'Smile',emoji:' 😃 '}, {id:3, title:'Smile', emoji:' 😆 '},
    {id:4, title:'Smile', emoji:'😅'}, {id:5, title:'Smile', emoji:' 😂 '}, {id:6, title:'Smile', emoji:' 🤣 '},
    {id:7, title:'Smile', emoji:'😛'}, {id:8, title:'Smile', emoji:'🙂'},{id:9, title:'Smile', emoji:'😜'},
    {id:10, title:'Smile', emoji:'😌'}, {id:11, title:'Angry', emoji:'😡'}, {id:12, title:'Angry', emoji:' 😠 '},
    {id:13, title:'Angry', emoji:' 🤬 '}, {id:14, title:'Angry', emoji:' 😤 '},{id:15,title:'Cute', emoji:' 😊 '},
    {id:16, title:'Cute', emoji:' 😇 '}, {id:17, title:'Cute', emoji:' 🤓 '},{id:18, title:'Cute', emoji:' 🥸 '},
    {id:19, title:'Cute', emoji:' 😚 '}, {id:20, title:'Sad', emoji:' 😞 '},{id:21, title:'Sad', emoji:' 😒 '},
    {id:22, title:'Sad', emoji:' 😔 '}, {id:23, title:'Sad', emoji:' 😟 '}, {id:24, title:'Sad', emoji:' 🙁 '},
    {id:25, title:'Sad', emoji:' 😣 '},{id:26, title:'Sad', emoji:' 😫 '}, {id:27, title:'Sad', emoji:' 😩 '},
    { id:28, title:'Sad', emoji:' 😨 '},{id:29, title:'Sad', emoji:' 😰 ' },{id:30, title:'Sad', emoji:' 😓 '},
    { id:31, title:'Love', emoji:' 😍 '},{id:32, title:'Love', emoji:' 🥰 '},{ id:33, title:'Love', emoji:' 😘 '},
    {id:34, title:'Love', emoji:' 😚 '},{id:35, title:'Love',emoji:' 🤩 '},{id:36, title:'Sleep', emoji:' 😴 '},
    {id:37, title:'Sleep', emoji:' 😪 '},{id:38, title:'Sleep', emoji:' 🥱 '},{id:39, title:'Shock', emoji:' 😯 '},
    {id:40, title:'Shock', emoji:' 😧 '},{id:41, title:'Shock', emoji:' 😲 ' },{id:42, title:'Shock', emoji:' 😱 '},{id:43, title:'Celebrate', emoji:' 🥳'},
  ];

function EmojiList(){
    const [search, setsearch] = useState('');
    const [filteredEmoji, setFilteredEmoji] = useState([]);

    useEffect(()=>{
        let filteredData = EmojiData.filter(emo => emo.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredEmoji(filteredData);
    },[search]);

    const copyEmoji = (emoji) => {
        navigator.clipboard.writeText(emoji).then(()=>{
            alert('Emoji Copied');
        }).catch(()=>{
            alert('coping failed..');
        })
    }

    return(
                <React.Fragment>
                    <center>
                    <h1>Emoji Searcher!</h1>
                    <SearchBar type='search' value={search} placeholder='search emoji... ex:sad, cute, smile,  ' onChange={(e)=>setsearch(e.target.value)}/>
                    <MainDiv>
                    {filteredEmoji.map((data)=>{
                        
                        return(
                            <OutterEmojiDiv key={data.id}>
                               <EmojiDiv key={data.id} onClick={()=>copyEmoji(data.emoji)}>{data.emoji}</EmojiDiv>
                            </OutterEmojiDiv>
                        );
                    })
                    }
                    </MainDiv>
                    </center>
                </React.Fragment>
    );
}

export default memo(EmojiList);