// Backend-Code (API-Route in pages/api/getDate.js)
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const result = await prisma.event.findFirst(); // Annahme: Datum ist in event gespeichert
            res.status(200).json({ date: result?.date || "01.01.2025" });
        } catch (error) {
            res.status(500).json({ error: "Fehler beim Abrufen des Datums" });
        }
    } else {
        res.status(405).json({ error: "Methode nicht erlaubt" });
    }
}