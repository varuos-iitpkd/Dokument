interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const awaitedParams = await params;
  const documentId = awaitedParams.documentId;

  return <div>document id page: {documentId}</div>;
}

export default DocumentIdPage;
