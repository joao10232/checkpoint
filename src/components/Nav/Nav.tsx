import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PeopleIcon from "@mui/icons-material/People";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DomainDisabledIcon from "@mui/icons-material/DomainDisabled";

export function Nav() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const arrayListagemDePonto = [
        {
            name: "Ponto",
            icon: <QueryBuilderIcon />,
        },
        {
            name: "Cadastrar Funcionário",
            icon: <GroupAddIcon />,
        },
        {
            name: "Ausências",
            icon: <DomainDisabledIcon />,
        },
    ];

    const DrawerList = (
        <Box sx={{ width: 260 }} role='presentation' onClick={toggleDrawer(false)}>
            <img src='' style={{}} />
            <List>
                {arrayListagemDePonto.map((item, index) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 3 === 0 ? (
                                    <QueryBuilderIcon />
                                ) : index % 3 === 1 ? (
                                    <GroupAddIcon />
                                ) : (
                                    <DomainDisabledIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                {" "}
                <DensityMediumIcon sx={{ color: "black" }} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
