import { HeaderContainer, Item, Logo, List, Btn } from "./Header.styled"

export default function Header() {
    return (
        <HeaderContainer>
            <List>
                <Item><Logo href="/"/></Item>
                <Item>О нас</Item>
                <Item>Тренеры</Item>
                <Item>Соревнования</Item>
                <Item>Расписание</Item>
                <Item>Цены</Item>
                <Item>Контакты</Item>
            </List>
            <Btn>Хочу на пробное занятие</Btn>
        </HeaderContainer>
    )
}