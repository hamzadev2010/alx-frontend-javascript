export default function getStudentsIdsSum(std){
    return std.reduce((sum, { stdid }) => sum + stdid, 0);
}
