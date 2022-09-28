import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  usePDF,
  Image,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import image from "./../../image/1.png";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  row: {
    flexDirection: "row",

    padding: 5,
  },

  section: {
    margin: 0,
    padding: 5,
    flexGrow: 1,
    borderRight: 1,
    border: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.row}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Image src={image} />
      </View>
    </Page>
  </Document>
);
function TestPDF() {
  const [instance, updateInstance] = usePDF({ document: MyDocument });
  const createPDF = () => {};
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <h2>MailingList</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="card">
              <div className="body">
                <PDFViewer style={{ width: "800px" }} showToolbar={false}>
                  <MyDocument />
                </PDFViewer>
                <PDFDownloadLink>Download</PDFDownloadLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestPDF;
