import React from 'react';

export function RenderContent(content){
    let render = [];
    content.blocks.forEach(block => {
        let type = block.type;
        let data = block.data;
        switch(type){
            case 'header':
                switch(data.level){
                    case 1:
                        render.push(<h1>{data.text}</h1>)
                        break;
                    case 2:
                        render.push(<h2>{data.text}</h2>)
                        break;
                    case 3:
                        render.push(<h3>{data.text}</h3>)
                        break;
                    case 4:
                        render.push(<h4>{data.text}</h4>)
                        break;
                    case 5:
                        render.push(<h5>{data.text}</h5>)
                        break;
                    case 6:
                        render.push(<h6>{data.text}</h6>)
                        break;
                    default:
                        render.push(<div></div>)

                }
                break;
            case 'paragraph':
                render.push(<p>{data.text}</p>);
                break;
            case 'image':
                render.push(<div>
                    <img src={data.url} alt={data.caption}></img>
                </div>)
                break;
            case 'list':
                switch(data.style){
                    case 'ordered':
                        render.push(
                            <ol>
                                {data.items.forEach(item => {
                                    render.push(
                                        <li>{item}</li>
                                    )
                                })}
                            </ol>
                        )
                        break;
                    default: 
                        render.push(<div></div>)
                }
                break;
            case 'embed':
                switch(data.service){
                    case 'youtube':
                        render.push(
                            <iframe width={data.width} height={data.height} 
                            src={data.embed}>
                            </iframe>
                        )
                        break;
                    default: 
                        render.push(<div></div>)
                }
                break;
            default:
                render.push(<div></div>)
        }
    })

    return render;
}