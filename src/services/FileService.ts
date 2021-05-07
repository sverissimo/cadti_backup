import fs from 'fs'

class FileService {

    saveFile({ files, fields }): void {
        console.log("🚀 ~ file: FileService.ts ~ line 6 ~ FileService ~ saveFile ~ files", files)
        console.log(fields[0], typeof fields, fields, fields[0].id)

        const
            data = Buffer.from(files, 'base64').toString('utf-8')
            , folder = 'd:\\tst3000_files\\'
            , { filename, metadata } = fields[0] && fields[0]
            , { fieldName, empresaId } = metadata
            //, path = folder + `${filename} - ${fieldName} códigoEmpresa ${empresaId}`
            , path = folder + `${filename}`
        //    , [fieldName, empresaId] = Object.values(JSON.parse(fields.metadata))

        console.log("🚀 ~ file: tst.js ~ line 19 ~ files", { fieldName, empresaId }, fields)

        if (!fs.existsSync(folder))
            fs.mkdirSync(folder)

        fs.writeFileSync(path, data)
    }
}

export { FileService }