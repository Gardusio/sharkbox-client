import { delet } from "./api"

export const deleteSlot = async (slot) => {
    return await delet("/slots/" + slot.id)
}