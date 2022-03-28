import { ServiceAccount } from "firebase-admin"
import adminSdk from "./firebase-adminsdk.json"

const serviceAccount: ServiceAccount = adminSdk as ServiceAccount

export default serviceAccount