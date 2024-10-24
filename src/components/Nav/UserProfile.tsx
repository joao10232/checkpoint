// src/components/UserProfile.tsx
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

// Dados do usuário
const userData = {
    name: "Joao",
};

const getInitials = (name: string) => {
    const names = name.split(" ");
    return names
        .map((n) => n.charAt(0))
        .join("")
        .toUpperCase();
};

const UserProfile: React.FC = () => {
    return (
        <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            sx={{ position: "absolute", top: "12px", left: "1691px" }}>
            <Avatar
                sx={{
                    bgcolor: deepOrange[500],
                    width: 40,
                    height: 40,
                }}>
                {getInitials(userData.name)} {/* avatar */}
            </Avatar>
            <div>{userData.name}</div> {/* Nome do usuário ao lado do avatar */}
        </Stack>
    );
};

export default UserProfile;
