import React from "react";
import { List } from "@components/List/List";
import { Box, ButtonBox } from "@components/Boxes";

type categoryType = 
    'Avartar' |
    'Arcodian' |
    'Box' |
    'Button' |
    'BottomSheet' |
    'Card' |
    'DatePicker' |
    'Input' |
    'Image' |
    'Popup' |
    'Progress' |
    'Pagination' |
    'Radio' |
    'Rating' |
    'Slide' |
    'Steps' |
    'Switch' |
    'Spinner' |
    'Tabs' |
    'Toast' |
    ''
const Components: React.FC = () => {
    const category: categoryType[] = [
        'Box', 'Image'
    ]
    const items: {id: string, component:React.ReactNode}[] 
    = [
        {id:'Box', component:<Box>Box</Box>},
        {id:'ButtonBox', component:<ButtonBox>ButtonBox</ButtonBox>},
    ]
    return (
        <>
            {category.forEach( c =>
                <List>
                    {items
                        .filter(e =>c.includes(e.id))
                        .map(e => 
                            <List.Item key={e.id}>{e.component}</List.Item>
                        )}
                </List>
            )}
        </>
    )
}

export default Components
