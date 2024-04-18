function getStudentsByLocation(std, city){
    return std.filter((liststd) => liststd.location == city);
}

export default getStudentsByLocation;
