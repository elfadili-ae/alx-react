import { normalize, schema } from "normalizr"

const courses = new schema.Entity("courses");

const coursesNormalizer = (data) => {
    const normalized = normalize(data, [courses]);
    return normalized.entities.courses;
}

export default coursesNormalizer;