export default function getStudentsIdsSum(students){
    return students.reduce((sum, { ids }) => sum + ids, 0);
}
