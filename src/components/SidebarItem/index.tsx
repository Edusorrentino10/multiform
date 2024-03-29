import { Link } from 'react-router-dom';
import { Container, Description, IconArea, Info, Point, Title } from './styles';
import { ReactComponent as BookIcon } from '../../svgs/book.svg';
import { ReactComponent as MailIcon } from '../../svgs/mail.svg';
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg';


type SidebarItemProps = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}


export const SidebarItem = ({ title, description, icon, path, active }: SidebarItemProps) => {

    return (
        <Container>
            <Link to={path}>
                <Info>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Info>
                <IconArea active={active}>
                    {icon === 'profile' &&
                        <ProfileIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={24} height={24} />
                    }
                </IconArea>
                <Point active={active}></Point>
            </Link>
        </Container>
    )
}
