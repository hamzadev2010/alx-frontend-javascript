function getStudentsIdsSum(students){
    return students.reduce((sum, { ids }) => sum + ids, 0);
}

export default getStudentsIdsSum;
